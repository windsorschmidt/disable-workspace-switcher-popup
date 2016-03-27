## Disable Window Switcher Popup

This is my first GNOME 3 shell extension. I created this because I saw no way to disable the *huge* popup displayed dead center of the screen when switching between workspaces, other than editing `/usr/share/gnome-shell/js/ui/workspaceSwitcherPopup.js` and setting the value of `DISPLAY_TIMEOUT` to zero.

## Installation:

**From the Gnome Extensions Page:**

https://extensions.gnome.org/extension/959/disable-workspace-switcher-popup/

**Manual Installation:**

Create a folder in ~/.local/share/gnome-shell/extensions called disable-workspace-switcher-popup@github.com and move extension.js and metadata.json into that folder:

    # mkdir -p ~/.local/share/gnome-shell/extensions 2>/dev/null
    # git clone git://github.com/windsorschmidt/disable-workspace-switcher-popup \
      ~/.local/share/gnome-shell/extensions/disable-workspace-switcher-popup@github.com

Restart the gnome-shell with the key sequence: Alt-F2 + "r" then ENTER.

Enable the extension. The easiest way to do this is to use [gnome-tweak-tool](https://wiki.gnome.org/action/show/Apps/GnomeTweakTool?action=show&redirect=GnomeTweakTool). From the Shell Extensions page, enable the plugin by clicking the switch widget:

![Screenshot](/screenshot.png "Enabling in gnome-tweak-tool")

Note: If the extension doesn't appear in gnome-tweak-tool, you may need to log out of your session and log in again.

## Acknowledgments

Based on the disable [window animations extension](https://github.com/lzap/disable-window-animations) by [Lukas Zapletal](https://github.com/lzap)

Thanks to users for suggesting changes and poking me for version updates.
