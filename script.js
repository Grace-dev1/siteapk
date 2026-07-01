const statusEl = document.getElementById('status');
const downloadCard = document.getElementById('downloadCard');
const releaseName = document.getElementById('releaseName');
const releaseTag = document.getElementById('releaseTag');
const assetLabel = document.getElementById('assetLabel');
const downloadButton = document.getElementById('downloadButton');

function updateStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? '#ff9fa8' : 'var(--muted)';
}

function findApkAsset(assets) {
  if (!assets || !assets.length) return null;
  return assets.find(asset => asset.name.toLowerCase().endsWith('.apk')) || assets[0];
}

const repo = 'Grace-dev1/siteapk';
const tag = ''; // Laisser vide pour latest ou mettre un tag exact comme 'v1.0.0'

async function loadRelease() {
  updateStatus('Chargement de la release…');
  downloadCard.classList.add('hidden');

  const endpoint = tag
    ? `https://api.github.com/repos/${repo}/releases/tags/${tag}`
    : `https://api.github.com/repos/${repo}/releases/latest`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API erreur ${response.status}: ${response.statusText}`);
    }

    const release = await response.json();
    const apkAsset = findApkAsset(release.assets);

    if (!apkAsset) {
      updateStatus('Aucun fichier APK trouvé dans cette release.', true);
      return;
    }

    releaseName.textContent = release.name || 'Release disponible';
    releaseTag.textContent = `Tag : ${release.tag_name}`;
    assetLabel.textContent = `Fichier : ${apkAsset.name}`;
    downloadButton.href = apkAsset.browser_download_url;
    downloadButton.textContent = `Télécharger ${apkAsset.name}`;
    downloadCard.classList.remove('hidden');
    updateStatus('Release chargée avec succès. Cliquez sur le bouton pour télécharger.');
  } catch (error) {
    console.error(error);
    updateStatus('Impossible de charger la release. Vérifie le dépôt ou le tag.', true);
  }
}

loadRelease();

