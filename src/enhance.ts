import { defineClientAppEnhance } from '@vuepress/client';


export default defineClientAppEnhance(({ app }) => {
  delete app._context.components.OutboundLink;

  app.component('OutboundLink', { render: () => null });
});
