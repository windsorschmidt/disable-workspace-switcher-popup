## Disable Window Switcher Popup

This is my first GNOME 3 shell extension. I created this because I saw no way to disable the *huge* popup displayed dead center of the screen when switching between workspaces, other than editing `/usr/share/gnome-shell/js/ui/workspaceSwitcherPopup.js` and setting the value of `DISPLAY_TIMEOUT` to zero.

## Installation:

**From the GNOME Extensions Page:**

https://extensions.gnome.org/extension/959/disable-workspace-switcher-popup/


**From the Command-line:**

Create a folder in ~/.local/share/gnome-shell/extensions called disable-workspace-switcher-popup@github.com and move extension.js and metadata.json into that folder:

    # mkdir -p ~/.local/share/gnome-shell/extensions 2>/dev/null
    # git clone git://github.com/windsorschmidt/disable-workspace-switcher-popup \
      ~/.local/share/gnome-shell/extensions/disable-workspace-switcher-popup@github.com

**From Zip Archive:**

Download [extension.zip](https://github.com/windsorschmidt/disable-workspace-switcher-popup/blob/master/extension.zip) above.

Using [GNOME Tweak Tool](https://wiki.gnome.org/action/show/Apps/GnomeTweakTool?action=show&redirect=GnomeTweakTool), click the box near *"Install Shell Extension"* and select the downloaded file.

![Screenshot](/screenshot_2.png "Installing extension from zip archive")

## Enabling the Extension:

Restart the GNOME Shell with the key sequence: Alt-F2 + "r" then ENTER.

Using GNOME Tweak Tool, navigate to the Shell Extensions pane and enable the plugin by clicking the switch widget:

![Screenshot](/screenshot.png "Enabling extension in GNOME Tweak Tool")

Note: You may need to restart GNOME Tweak Tool and/or re-log in to your session in order for the extension to appear in the list of installed extensions.

## Acknowledgments

Based on the disable [window animations extension](https://github.com/lzap/disable-window-animations) by [Lukas Zapletal](https://github.com/lzap)

Thanks to users for suggesting changes and poking me for version updates.
