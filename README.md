## Game-Icons to Webfont

This is a simple script to convert the [Game-Icons](https://game-icons.net/) SVG icons to a webfont.

Keep in mind that the icons are licensed under the [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) or [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) license. Respect the license and the authors of the icons.

This script is licensed under the [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) license.

### Usage

1. Clone the repository

2. Install the required packages

```bash
npm install
```

3. Download the SVG icons from [Game-Icons](https://game-icons.net/) and place the zip file in the root directory of the repository.

4. Run the script

```bash
./prepare-icons.sh
```

5. The script will extract the SVG icons from the zip file and adds the author names to the SVG files.

6. Run the script to generate the webfont

```bash
npm run create
```

