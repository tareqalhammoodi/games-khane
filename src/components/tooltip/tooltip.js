// Tooltip functionality
function toggleTooltip() {
  const tooltip = document.getElementById('optionsTooltip');
  tooltip.classList.toggle('show');
}

// Show tooltip on hover/click
document.addEventListener('DOMContentLoaded', function() {
  const infoIcon = document.querySelector('.info-icon');
  const tooltip = document.getElementById('optionsTooltip');
  
  if (infoIcon && tooltip) {
    infoIcon.addEventListener('mouseenter', function() {
      tooltip.classList.add('show');
    });
    
    infoIcon.addEventListener('mouseleave', function() {
      tooltip.classList.remove('show');
    });
  }
});

// Close tooltip when clicking outside
document.addEventListener('click', function(event) {
  const tooltip = document.getElementById('optionsTooltip');
  const infoIcon = document.querySelector('.info-icon');
  
  if (tooltip && infoIcon && !tooltip.contains(event.target) && !infoIcon.contains(event.target)) {
    tooltip.classList.remove('show');
  }
});
