// Replace the default footer content
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('footer');
  if (footer) {
    const footerContent = footer.querySelector('.text-muted-foreground');
    if (footerContent) {
      footerContent.innerHTML = `
        Built by <a href="https://github.com/wolfiex">Daniel Ellis</a>
        for <a href="https://wcrp-cmip.org">WCRP-CMIP</a>
        using the <a href="https://github.com/asiffer/mkdocs-shadcn">shadcn</a> theme.
      `;
    }
  }

  // Add version selector
  addVersionSelector();
});

function addVersionSelector() {
  // Calculate the base URL for versions.json
  // mike stores versions.json at the root, e.g., /MIP-template/versions.json
  // Current URL might be /MIP-template/latest/about/committee/
  
  const pathParts = window.location.pathname.split('/').filter(p => p);
  
  // Find the repo name (first path segment) and version (second segment)
  // Structure: /repo-name/version/page/path/
  const repoName = pathParts[0] || '';
  const versionOrAlias = pathParts[1] || '';
  
  // Build the base URL to versions.json
  const origin = window.location.origin;
  const versionsUrl = `${origin}/${repoName}/versions.json`;
  
  fetch(versionsUrl)
    .then(response => {
      if (!response.ok) throw new Error('versions.json not found');
      return response.json();
    })
    .then(versions => {
      if (!versions || versions.length === 0) return;

      // Find current version from URL path
      const currentVersion = versions.find(v => 
        v.version === versionOrAlias || v.aliases.includes(versionOrAlias)
      );

      // Create dropdown
      const dropdown = document.createElement('div');
      dropdown.className = 'version-selector';
      
      // Sort versions: latest first, then by version number descending
      const sortedVersions = [...versions].sort((a, b) => {
        if (a.aliases.includes('latest')) return -1;
        if (b.aliases.includes('latest')) return 1;
        return b.version.localeCompare(a.version, undefined, { numeric: true });
      });
      
      dropdown.innerHTML = `
        <select id="version-select" title="Select documentation version">
          ${sortedVersions.map(v => {
            const label = v.aliases.includes('latest') ? `${v.version} (latest)` : v.version;
            const selected = currentVersion && (v.version === currentVersion.version) ? 'selected' : '';
            return `<option value="${v.version}" ${selected}>${label}</option>`;
          }).join('')}
        </select>
      `;

      // Find header and insert dropdown
      const header = document.querySelector('header .container-wrapper');
      if (header) {
        const searchDiv = header.querySelector('.ml-auto');
        if (searchDiv) {
          dropdown.style.marginRight = '0.5rem';
          searchDiv.insertBefore(dropdown, searchDiv.firstChild);
        }
      }

      // Handle version change
      document.getElementById('version-select').addEventListener('change', function(e) {
        const newVersion = e.target.value;
        
        // Get the page path after the version segment
        // e.g., /MIP-template/latest/about/committee/ -> about/committee/
        const pagePath = pathParts.slice(2).join('/');
        
        // Build new URL with selected version
        const newUrl = `${origin}/${repoName}/${newVersion}/${pagePath}`;
        
        // Try to navigate to the same page in new version, fallback to version root
        fetch(newUrl, { method: 'HEAD' })
          .then(response => {
            if (response.ok) {
              window.location.href = newUrl;
            } else {
              window.location.href = `${origin}/${repoName}/${newVersion}/`;
            }
          })
          .catch(() => {
            window.location.href = `${origin}/${repoName}/${newVersion}/`;
          });
      });
    })
    .catch(err => {
      // No versions.json available (local dev or first deploy)
      console.log('Version selector: versions.json not available -', err.message);
    });
}
