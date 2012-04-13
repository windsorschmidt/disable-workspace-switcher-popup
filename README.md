## Disable Window Switcher Popup

Works with Gnome Shell 3.0-3.2 (Fedora, Ubuntu, anything...)

Author: Windsor Schmidt [_windsor.schmidt_at_gmail_dot_com_]

## Installation:

Create a folder in ~/.local/share/gnome-shell/extensions called disable-workspace-switcher-popup@github.com and move extension.js and metadata.json into that folder. Restart the gnome-shell:

    # mkdir -p ~/.local/share/gnome-shell/extensions 2>/dev/null
    # git clone git://github.com/honeyclaw/disable-workspace-switcher-popup \
      ~/.local/share/gnome-shell/extensions/disable-workspace-switcher-popup@github.com

Alt-F2 and "r" ENTER

For Gnome Shell 3.2 you also need to turn the extension on. The easiest way to do that is to install gnome-tweak-tool and go to Shell Extensions settings screen and turn it on (the switch-"thing" must have "I" on it).

## Acknowledgments

Based on the disable [window animations extension](https://github.com/lzap/disable-window-animations) by Lukas Zapletal [_lzap_at_seznam_dot_cz_]
