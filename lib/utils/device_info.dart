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

// Package imports:
import 'package:device_info_plus/device_info_plus.dart';

Future<bool> isAndroidSdkVersionAbove(int api) async =>
    (await DeviceInfoPlugin().androidInfo).version.sdkInt > api;
