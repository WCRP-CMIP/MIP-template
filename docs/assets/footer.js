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
});
