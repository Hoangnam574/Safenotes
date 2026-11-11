/*
* Copyright (C) hoangnam574 - All Rights Reserved.
*
* SPDX-License-Identifier: GPL-3.0-or-later
* You may use, distribute and modify this code under the
* terms of the GPL-3.0+ license.
*
* You should have received a copy of the GNU General Public License v3.0 with
* this file. If not, please visit https://www.gnu.org/licenses/gpl-3.0.html
*
* See https://github.com/Hoangnam574/Safenotes for support or download.
*/

/*  
Cloudflare Worker: "latest.github.com/Hoangnam574/Safenotes.worker"
  Provides persistent URL for latest APK.
    URLS
      - https://github.com/Hoangnam574/Safenotes/download
      - https://latest.github.com/Hoangnam574/Safenotes/
*/

export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

const statusCode = 301;
async function handleRequest(request) {
  // Get the latest version from pubspec.yaml
  let pubspecYAML = await fetch('https://raw.githubusercontent.com/Hoangnam574/Safenotes/main/pubspec.yaml');
  let text = await pubspecYAML.text();
  let pattern = /version:\s.+\+(\d+)/g;
  let version = text.match(pattern)[0].split("version:").at(-1).split('+')[0].replaceAll(' ', '');
  let downloadURL = `https://github.com/Hoangnam574/Safenotes/releases/download/v${version}/safenotes-${version}-all.apk`;
  return Response.redirect(downloadURL, statusCode);
}