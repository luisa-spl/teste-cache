interface NodeModule {
    hot: {
      accept(path: string | undefined, fn: () => void): void;
    };
  }
  
  interface Window {
    ga?(
      command: `${`${string}.` | ''}${'set' | 'create' | 'send' | 'require' | 'provide' | 'remove'}`,
      ...args: unknown[]
    ): void;
    dataLayer?: Record<string, any>
  }
  
  declare module '*.scss' {
    interface IClassNames {
      [className: string]: string;
    }
  
    const classNames: IClassNames;
    export = classNames;
  }
  
  declare module '*.less' {
    interface IClassNames {
      [className: string]: string;
    }
  
    const classNames: IClassNames;
    export = classNames;
  }
  
  declare module '*.graphql' {
    import type { DocumentNode } from 'graphql';
  
    const Schema: DocumentNode;
    export = Schema;
  }
  
  declare module '*.png' {
    const Img: string;
    export = Img;
  }
  
  declare module '*.jpeg' {
    const Img: string;
    export = Img;
  }
  
  declare module '*.svg' {
    const Img: string;
    export = Img;
  }
  
  declare module '*.gif' {
    const Img: string;
    export = Img;
  }
  
  declare module '*.webp' {
    const Img: string;
    export = Img;
  }
  
  declare module '*.jpg' {
    const Img: string;
    export = Img;
  }
  
  declare module '*.svg' {
    const svgUrl: string;
  
    const svgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  
    export default svgUrl;
    export { svgComponent as ReactComponent };
  }
  
  declare module 'react-responsive-carousel/lib/js/components/Carousel/index' {
    import { Carousel } from 'react-responsive-carousel';
  
    export = Carousel;
  }
  
  declare module 'watermarkjs';
  