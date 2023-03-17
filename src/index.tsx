import 'regenerator-runtime/runtime';
import { ThemeProvider } from 'oxe-design';
import ReactDOM from 'react-dom/client';
import { App } from './app';

async function bootstrap() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
  );
}

bootstrap();
