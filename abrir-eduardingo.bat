@echo off
setlocal

set "PORT=4173"
set "URL=http://127.0.0.1:4173/"
set "PROJECT_DIR=%~dp0"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$port = %PORT%; $url = '%URL%'; $projectDir = '%PROJECT_DIR%';" ^
  "function Test-LocalPort { $client = New-Object System.Net.Sockets.TcpClient; try { $client.Connect('127.0.0.1', $port); return $true } catch { return $false } finally { $client.Dispose() } };" ^
  "if (-not (Test-LocalPort)) { Start-Process -FilePath 'python' -ArgumentList @('-m', 'http.server', $port.ToString(), '--bind', '127.0.0.1') -WorkingDirectory $projectDir -WindowStyle Minimized; for ($i = 0; $i -lt 30 -and -not (Test-LocalPort); $i++) { Start-Sleep -Milliseconds 500 } };" ^
  "if (Test-LocalPort) { Start-Process $url } else { Write-Host 'No se pudo iniciar el servidor. Comprueba que Python este instalado y disponible en PATH.'; Read-Host 'Pulsa Enter para cerrar'; exit 1 }"

endlocal
