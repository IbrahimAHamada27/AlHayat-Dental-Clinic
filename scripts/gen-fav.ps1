Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path $PSScriptRoot "..\public\assets\images\logo\logo-square.jpg"
$publicDir = Join-Path $PSScriptRoot "..\public"

$srcImg = [System.Drawing.Image]::FromFile($srcPath)
Write-Host "Source image size: $($srcImg.Width)x$($srcImg.Height)"

$sizes = @(16, 32, 48, 64, 96, 128, 180, 192, 512)

foreach ($size in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graphics.DrawImage($srcImg, 0, 0, $size, $size)
    $graphics.Dispose()

    $destPng = Join-Path $publicDir "favicon-${size}x${size}.png"
    $bmp.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved: $destPng"

    if ($size -eq 48) {
        $destGoogle = Join-Path $publicDir "favicon-48x48.png"
        $bmp.Save($destGoogle, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($size -eq 180) {
        $destApple = Join-Path $publicDir "apple-touch-icon.png"
        $bmp.Save($destApple, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($size -eq 192) {
        $destMain = Join-Path $publicDir "favicon.png"
        $bmp.Save($destMain, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $bmp.Dispose()
}

# Generate multi-icon ICO for Windows/Googlebot containing 16, 32, 48
# In System.Drawing, an icon can be saved directly from a 48x48 bitmap
$icoBmp = New-Object System.Drawing.Bitmap 48, 48
$icoGraphics = [System.Drawing.Graphics]::FromImage($icoBmp)
$icoGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$icoGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$icoGraphics.DrawImage($srcImg, 0, 0, 48, 48)
$icoGraphics.Dispose()

$icon = [System.Drawing.Icon]::FromHandle($icoBmp.GetHicon())
$icoPath = Join-Path $publicDir "favicon.ico"
$stream = [System.IO.File]::Create($icoPath)
$icon.Save($stream)
$stream.Close()
$icon.Dispose()
$icoBmp.Dispose()
Write-Host "Saved ICO: $icoPath"

$srcImg.Dispose()
Write-Host "All favicons generated successfully!"
