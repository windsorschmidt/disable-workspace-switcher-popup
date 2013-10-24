## Disable Window Switcher Popup

This is my first GNOME 3 shell extension. I created this because I saw no way to disable the *huge* popup displayed dead center of the screen when switching between workspaces, other than editing `/usr/share/gnome-shell/js/ui/workspaceSwitcherPopup.js` and setting the value of `DISPLAY_TIMEOUT` to zero.

## Installation:

Create a folder in ~/.local/share/gnome-shell/extensions called disable-workspace-switcher-popup@github.com and move extension.js and metadata.json into that folder:

    # mkdir -p ~/.local/share/gnome-shell/extensions 2>/dev/null
    # git clone git://github.com/windsorschmidt/disable-workspace-switcher-popup \
      ~/.local/share/gnome-shell/extensions/disable-workspace-switcher-popup@github.com

Restart the gnome-shell with the key sequence: Alt-F2 + "r" then ENTER.

For Gnome Shell 3.2 you also need to turn the extension on. The easiest way to do that is to install gnome-tweak-tool and go to Shell Extensions settings screen and turn it on (the switch widget must have an "I" on it).

## Acknowledgments

Based on the disable [window animations extension](https://github.com/lzap/disable-window-animations) by [Lukas Zapletal](https://github.com/lzap)
