#!/bin/sh
# Regenera los PDF del CV y una vista previa PNG de cada uno.
# Uso (Git Bash): sh cv/src/build.sh
set -e
cd "$(dirname "$0")"
EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
PREVIEW="${PREVIEW_DIR:-$PWD}"

for lang in es en; do
  if [ "$lang" = es ]; then out="CV-Jorge-Morales-Nova.pdf"; else out="Resume-Jorge-Morales-Nova.pdf"; fi
  src="$(cygpath -w "$PWD/cv-$lang.html")"
  url="file:///$(echo "$src" | sed 's#\\#/#g')"
  "$EDGE" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
    --print-to-pdf="$(cygpath -w "$PWD/../$out")" "$url" 2>/dev/null
  "$EDGE" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1.5 \
    --window-size=794,1123 --virtual-time-budget=8000 --emulate-media-type=print \
    --screenshot="$(cygpath -w "$PREVIEW/preview-$lang.png")" "$url" 2>/dev/null
done
ls -la ..
