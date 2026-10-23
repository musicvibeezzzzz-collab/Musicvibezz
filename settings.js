/* ==================================
VIBE SETTINGS — LOCAL STORAGE
================================== */

const VIBE_SETTINGS_KEY = "vibeSettings";

function getVibeSettings() {
try {
return {
theme: "dark",
name: "",
profileImage: "",
notifications: true,
...JSON.parse(
localStorage.getItem(VIBE_SETTINGS_KEY) || "{}"
)
};
} catch (error) {
return {
theme: "dark",
name: "",
profileImage: "",
notifications: true
};
}
}

function saveVibeSettings(updates) {
const current = getVibeSettings();

const updated = {
...current,
...updates
};

localStorage.setItem(
VIBE_SETTINGS_KEY,
JSON.stringify(updated)
);

applyVibeSettings();

return updated;
}

function applyVibeSettings() {
const settings = getVibeSettings();

document.documentElement.dataset.theme =
settings.theme === "light" ? "light" : "dark";

const profileImages =
document.querySelectorAll(".im, .syam");

profileImages.forEach(function (image) {
if (settings.profileImage) {
image.src = settings.profileImage;
}
});
}

document.addEventListener("DOMContentLoaded", function () {
applyVibeSettings();
});