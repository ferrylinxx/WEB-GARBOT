#!/bin/bash

# Script para actualizar la descripción de Docker Hub
# Requiere: curl, jq

DOCKER_USERNAME="gabo9803"
DOCKER_REPOSITORY="garbotweb"
README_FILE="DOCKER_HUB_README.md"

echo "🔐 Ingresa tu token de Docker Hub:"
echo "   (Créalo en: https://hub.docker.com/settings/security)"
read -s DOCKER_TOKEN

echo ""
echo "📝 Leyendo README..."
README_CONTENT=$(cat "$README_FILE")

echo "🚀 Actualizando descripción en Docker Hub..."

# Obtener JWT token
JWT_TOKEN=$(curl -s -X POST \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$DOCKER_USERNAME\", \"password\": \"$DOCKER_TOKEN\"}" \
  https://hub.docker.com/v2/users/login/ | jq -r .token)

if [ "$JWT_TOKEN" == "null" ] || [ -z "$JWT_TOKEN" ]; then
  echo "❌ Error: No se pudo autenticar. Verifica tu token."
  exit 1
fi

# Actualizar descripción
RESPONSE=$(curl -s -X PATCH \
  -H "Authorization: JWT $JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"full_description\": $(echo "$README_CONTENT" | jq -Rs .)}" \
  "https://hub.docker.com/v2/repositories/$DOCKER_USERNAME/$DOCKER_REPOSITORY/")

if echo "$RESPONSE" | grep -q "full_description"; then
  echo "✅ Descripción actualizada exitosamente!"
  echo "🔗 Ver en: https://hub.docker.com/r/$DOCKER_USERNAME/$DOCKER_REPOSITORY"
else
  echo "❌ Error al actualizar:"
  echo "$RESPONSE"
  exit 1
fi

