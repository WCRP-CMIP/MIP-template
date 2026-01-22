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
  const pathParts = window.location.pathname.split('/').filter(p => p);
  const repoName = pathParts[0] || '';
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
      const versionOrAlias = pathParts[1] || '';
      const currentVersion = versions.find(v => 
        v.version === versionOrAlias || v.aliases.includes(versionOrAlias)
      );

      // Sort versions: latest first, then by version number descending
      const sortedVersions = [...versions].sort((a, b) => {
        if (a.aliases.includes('latest')) return -1;
        if (b.aliases.includes('latest')) return 1;
        return b.version.localeCompare(a.version, undefined, { numeric: true });
      });

      // Create dropdown element
      const dropdown = document.createElement('div');
      dropdown.className = 'version-selector';
      dropdown.innerHTML = `
        <label for="version-select" class="version-label">Version:</label>
        <select id="version-select" title="Select documentation version">
          ${sortedVersions.map(v => {
            const label = v.aliases.includes('latest') ? `${v.version} (latest)` : v.version;
            const selected = currentVersion && (v.version === currentVersion.version) ? 'selected' : '';
            return `<option value="${v.version}" ${selected}>${label}</option>`;
          }).join('')}
        </select>
      `;

      // Try multiple insertion points
      let inserted = false;
      
      // Option 1: Header container
      const headerContainer = document.querySelector('header .container-wrapper');
      if (headerContainer && !inserted) {
        const searchDiv = headerContainer.querySelector('.ml-auto');
        if (searchDiv) {
          searchDiv.insertBefore(dropdown, searchDiv.firstChild);
          inserted = true;
        }
      }
      
      // Option 2: Just the header
      if (!inserted) {
        const header = document.querySelector('header');
        if (header) {
          header.appendChild(dropdown);
          inserted = true;
        }
      }
      
      // Option 3: Top of the page (fallback)
      if (!inserted) {
        const main = document.querySelector('main') || document.body;
        dropdown.style.position = 'fixed';
        dropdown.style.top = '10px';
        dropdown.style.right = '10px';
        dropdown.style.zIndex = '9999';
        main.appendChild(dropdown);
        inserted = true;
      }

      // Handle version change
      document.getElementById('version-select').addEventListener('change', function(e) {
        const newVersion = e.target.value;
        const pagePath = pathParts.slice(2).join('/');
        const newUrl = `${origin}/${repoName}/${newVersion}/${pagePath}`;
        
        // Try to navigate to the same page in new version
        fetch(newUrl, { method: 'HEAD' })
          .then(response => {
            window.location.href = response.ok ? newUrl : `${origin}/${repoName}/${newVersion}/`;
          })
          .catch(() => {
            window.location.href = `${origin}/${repoName}/${newVersion}/`;
          });
      });
      
      console.log('Version selector added successfully');
    })
    .catch(err => {
      console.log('Version selector: versions.json not available -', err.message);
    });
}
