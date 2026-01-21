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
  // Fetch versions.json from mike
  const baseUrl = document.querySelector('script[src*="base_url"]') 
    ? base_url 
    : window.location.pathname.split('/').slice(0, -2).join('/') + '/';
  
  fetch(baseUrl + '../versions.json')
    .then(response => response.json())
    .then(versions => {
      if (!versions || versions.length === 0) return;

      // Find current version from URL
      const pathParts = window.location.pathname.split('/').filter(p => p);
      const currentVersion = versions.find(v => 
        pathParts.includes(v.version) || v.aliases.some(a => pathParts.includes(a))
      );

      // Create dropdown
      const dropdown = document.createElement('div');
      dropdown.className = 'version-selector';
      dropdown.innerHTML = `
        <select id="version-select" class="bg-background border rounded-md px-2 py-1 text-sm cursor-pointer">
          ${versions.map(v => {
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
        const currentPath = window.location.pathname;
        
        // Replace version in path
        let newPath;
        if (currentVersion) {
          newPath = currentPath.replace(
            new RegExp(`/(${currentVersion.version}|${currentVersion.aliases.join('|')})/`),
            `/${newVersion}/`
          );
        } else {
          newPath = baseUrl + newVersion + '/';
        }
        
        window.location.href = newPath;
      });
    })
    .catch(err => {
      // No versions.json available (local dev or first deploy)
      console.log('Version selector: No versions available yet');
    });
}
