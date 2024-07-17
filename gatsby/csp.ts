import buildCsp from 'content-security-policy-builder';
import { ifDev } from './dev';

const withSubdomains = (hosts: string[]): string[] =>
  hosts.reduce<string[]>(
    (subdomained, host) => [...subdomained, host, `*.${host}`],
    []
  );

const defaultSrc = [
  "'self'",
  ...withSubdomains([
    'iwgb.org.uk',
    'airtable.com',
    'youtube.com',
    'twitter.com',
    'actionnetwork.org',
    'facebook.com',
  ]),
];

const csp = buildCsp({
  directives: {
    defaultSrc,
    fontSrc: [...defaultSrc, 'fonts.gstatic.com'],
    styleSrc: [...defaultSrc, "'unsafe-inline'", 'fonts.googleapis.com'],
    connectSrc: [...defaultSrc, ...ifDev(['localhost:*'])],
    scriptSrc: [...defaultSrc, "'unsafe-inline'", ...ifDev(["'unsafe-eval'"])],
    frameAncestors: ['cms.iwgb.org.uk', 'gameworkers.co.uk'],
  },
});

export default csp;
