from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ICON_PNG = ROOT / "public" / "fyg-favicon-source.png"
FAVICON_ICO = ROOT / "src" / "app" / "favicon.ico"


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        Path("C:/Windows/Fonts/ariblk.ttf"),
        Path("C:/Windows/Fonts/arialbd.ttf"),
        Path("C:/Windows/Fonts/arial.ttf"),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def main() -> None:
    size = 512
    image = Image.new("RGBA", (size, size), "#050505")
    draw = ImageDraw.Draw(image)
    font = load_font(252)
    text = "FYG"

    bbox = draw.textbbox((0, 0), text, font=font, spacing=0)
    width = bbox[2] - bbox[0]
    height = bbox[3] - bbox[1]
    x = (size - width) / 2 - bbox[0]
    y = (size - height) / 2 - bbox[1] - 9

    draw.text((x - 1, y), text, fill="white", font=font, spacing=0)

    ICON_PNG.parent.mkdir(parents=True, exist_ok=True)
    image.save(ICON_PNG, format="PNG")
    image.save(
        FAVICON_ICO,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )


if __name__ == "__main__":
    main()
