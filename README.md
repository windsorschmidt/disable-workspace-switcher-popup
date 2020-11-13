## Disable Window Switcher Popup

This is my first GNOME 3 shell extension. I created this because I saw no way to disable the *huge* popup displayed dead center of the screen when switching between workspaces, other than editing `/usr/share/gnome-shell/js/ui/workspaceSwitcherPopup.js` and setting the value of `DISPLAY_TIMEOUT` to zero.

## Installation:

**From the GNOME Extensions Page:**

https://extensions.gnome.org/extension/959/disable-workspace-switcher-popup/


**From the Command-line:**

```
curl -sL https://github.com/windsorschmidt/disable-workspace-switcher-popup/tarball/master |
  tar xzv --wildcards --strip 1 --directory ~/.local/share/gnome-shell/extensions/ \
  "*/disable-workspace-switcher-popup@github.com"
```

## Enabling the Extension:

Restart the GNOME Shell with the key sequence: Alt-F2 + "r" then ENTER.

Using GNOME Tweak Tool, navigate to the Shell Extensions pane and enable the plugin by clicking the switch widget:

![Screenshot](/screenshot.png "Enabling extension in GNOME Tweak Tool")

Note: You may need to restart GNOME Tweak Tool and/or re-log in to your session in order for the extension to appear in the list of installed extensions.

## Acknowledgments

Based on the disable [window animations extension](https://github.com/lzap/disable-window-animations) by [Lukas Zapletal](https://github.com/lzap)

Thanks to users for suggesting changes and poking me for version updates.
