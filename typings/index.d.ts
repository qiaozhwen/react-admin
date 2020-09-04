/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
  }
}

declare module 'rc-table*';
declare module 'rc-calendar/lib*';
declare module 'rc-time-picker*'
declare module 'rc-form*';
declare module 'rc-tooltip*';

declare module '*.bmp' {
  const src: string;
  export = src;
}

declare module '*.gif' {
  const src: string;
  export = src;
}

declare module '*.jpg' {
  const src: string;
  export = src;
}

declare module '*.jpeg' {
  const src: string;
  export = src;
}

declare module '*.png' {
  const src: string;
  export = src;
}

declare module '*.webp' {
    const src: string;
    export = src;
}

declare module '*.svg' {
  import React, { Component } from 'react';

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
