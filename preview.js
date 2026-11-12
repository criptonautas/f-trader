/* SPDX-License-Identifier: AGPL-3.0-or-later
   Copyright (C) 2026 Criptonautas */
// Spanish is in the markup, so without JS the page still reads; any other browser language gets English.
if (!/^es\b/i.test(navigator.language || "")) {
  document.documentElement.lang = "en";
  for (const el of document.querySelectorAll("[data-en]")) el.textContent = el.dataset.en;
}

// The page is served on the URL that was asked for, so this is where to come back.
// Authentik drops a redirect that does not name this host, and sends people to its app list instead.
document.querySelector("a.sign-in").href =
  "/outpost.goauthentik.io/start?rd=" + encodeURIComponent(location.href);
