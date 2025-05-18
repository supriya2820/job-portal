// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from '@sentry/profiling-node' ;

Sentry.init({
  dsn: "https://4f9277020aedbe28c00fe55e9da2601b@o4509339861188608.ingest.us.sentry.io/4509339865972736",
  integrations:[
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  //TRACING
//   tracesSampleRate : 1.0,
});

Sentry.profiler.startProfiler();
Sentry.startSpan({
    name: "My First Transaction",
},() => {

});

Sentry.profiler.startProfiler();