# proximitis-detailblocks-react

React UI library to render Proximitis Detail`s Blocks. This npm package is useful primary for [Proximitis](https://proximitis.cz) customers.

List of curently supported Detail Blocks:

- Title
- Heading
- Paragraph
- Image
- Button
- OrderedList
- UnorderedList

## Install

```bash
yarn add proximitis-detailblocks-react
```

## Usage

Every components needs Theme, that has this type:

```
export type Theme = {
   __typename?: 'Theme';
  id: string;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontSize: number;
  lineHeight: number;
  spacing: number;
  titleColor: string;
  titleFontSize: number;
  headingColor: string;
  headingFontSize: number;
  buttonBackground: string;
  buttonTextColor: string;
};
```

### Title

Props:

- text: string
- theme: Theme

```tsx
import React, { Component } from 'react';
import { Title } from 'proximitis-detailblocks-react';

<Title text="Text to be rendered" theme={theme} />;
```

### Heading

Props:

- text: string
- theme: Theme

```tsx
import React, { Component } from 'react';
import { Heading } from 'proximitis-detailblocks-react';

<Heading text="Text to be rendered" theme={theme} />;
```

### Paragraph

Props:

- text: string
- theme: Theme

```tsx
import React, { Component } from 'react';
import { Paragraph } from 'proximitis-detailblocks-react';

<Paragraph text="Text to be rendered" theme={theme} />;
```

### Image

Props:

- src: string
- width: number (Width in percentages, value 1% to 100%. Valid value is also `101` that stands for fullwidth when margins are ignored.)
- index: number (index of element in array of Detail Blocks)
- theme: Theme

```tsx
import React, { Component } from 'react';
import { Image } from 'proximitis-detailblocks-react';

<Image src="https://placehold.it/300x300" witdh={100} theme={theme} index={2} />;
```

### Button

Props:

- link: string
- text: string
- theme: Theme

```tsx
import React, { Component } from 'react';
import { Button } from 'proximitis-detailblocks-react';

<Button link="https://example.com" text="Button Text" theme={theme} />;
```

### OrderedList

Props:

- text: string
- theme: Theme

```tsx
import React, { Component } from 'react';
import { OrderedList } from 'proximitis-detailblocks-react';

<OrderedList text="Text to be rendered" theme={theme} />;
```

### UnorderedList

Props:

- text: string
- theme: Theme

```tsx
import React, { Component } from 'react';
import { UnorderedList } from 'proximitis-detailblocks-react';

<UnorderedList text="Text to be rendered" theme={theme} />;
```

## License

MIT © [proximitis](https://github.com/proximitis)
