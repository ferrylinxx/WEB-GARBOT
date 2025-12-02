# Script para actualizar la descripcion de Docker Hub

$DOCKER_USERNAME = "gabo9803"
$DOCKER_REPOSITORY = "garbotweb"
$README_FILE = "DOCKER_HUB_README.md"

Write-Host "Ingresa tu token de Docker Hub:" -ForegroundColor Cyan
Write-Host "   (Crealo en: https://hub.docker.com/settings/security)" -ForegroundColor Gray
Write-Host ""
$DOCKER_TOKEN_PLAIN = Read-Host "Token"

Write-Host ""
Write-Host "Leyendo README..." -ForegroundColor Yellow
$README_CONTENT = Get-Content $README_FILE -Raw

Write-Host "Actualizando descripcion en Docker Hub..." -ForegroundColor Green

# Obtener JWT token
$loginBody = @{
    username = $DOCKER_USERNAME
    password = $DOCKER_TOKEN_PLAIN
} | ConvertTo-Json

try {
    $loginResponse = Invoke-RestMethod -Uri "https://hub.docker.com/v2/users/login/" -Method Post -Body $loginBody -ContentType "application/json"
    $JWT_TOKEN = $loginResponse.token

    if ([string]::IsNullOrEmpty($JWT_TOKEN)) {
        Write-Host "Error: No se pudo autenticar. Verifica tu token." -ForegroundColor Red
        exit 1
    }

    Write-Host "Autenticacion exitosa" -ForegroundColor Green

    # Actualizar descripcion
    $headers = @{
        "Authorization" = "JWT $JWT_TOKEN"
        "Content-Type" = "application/json"
    }

    $updateBody = @{
        full_description = $README_CONTENT
    } | ConvertTo-Json

    $updateResponse = Invoke-RestMethod -Uri "https://hub.docker.com/v2/repositories/$DOCKER_USERNAME/$DOCKER_REPOSITORY/" -Method Patch -Headers $headers -Body $updateBody

    Write-Host "Descripcion actualizada exitosamente!" -ForegroundColor Green
    Write-Host "Ver en: https://hub.docker.com/r/$DOCKER_USERNAME/$DOCKER_REPOSITORY" -ForegroundColor Cyan

} catch {
    Write-Host "Error al actualizar:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

