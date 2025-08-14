export default {
  updateKPIs: () => {
    
    const days = parseInt(DateRangeDropdown.selectedOptionValue);
    const multiplier = days / 30;
    
    return {
      sessions: Math.round(24847 * multiplier),
      sales: Math.round(89247 * multiplier),
      
    };
  }
}