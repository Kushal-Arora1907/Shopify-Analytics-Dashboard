export default {
  getKPIData: () => {
    const days = parseInt(DateRangeDropdown.selectedOptionValue || "30");
    const country = CountryDropdown.selectedOptionValue || "all";
    const device = DeviceDropdown.selectedOptionValue || "all";
    
    let multiplier = days / 30;
    
    let countryMultiplier = 1;
    if (country === "US") countryMultiplier = 1.2;
    else if (country === "CA") countryMultiplier = 0.8;
    else if (country === "UK") countryMultiplier = 0.7;
    else if (country === "DE") countryMultiplier = 0.6;
    else if (country === "IN") countryMultiplier = 0.5;
    
    let deviceMultiplier = 1;
    if (device === "desktop") deviceMultiplier = 0.6;
    else if (device === "mobile") deviceMultiplier = 0.8;
    else if (device === "tablet") deviceMultiplier = 0.2;
    
    const finalMultiplier = multiplier * countryMultiplier * deviceMultiplier;
    
    return {
      totalSessions: Math.round(24847 * finalMultiplier),
      totalSales: Math.round(89247 * finalMultiplier),
      conversionRate: (3.2 + (Math.random() - 0.5)).toFixed(1),
      avgOrderValue: Math.round(156 + (Math.random() - 0.5) * 20),
      sessionsChange: (12.3 + (Math.random() - 0.5) * 5).toFixed(1),
      salesChange: (8.7 + (Math.random() - 0.5) * 4).toFixed(1)
    };
  },
  
  getSalesOverTime: () => {
    const year = YearDropdown.selectedOptionValue || "2024";
    const country = CountryDropdown.selectedOptionValue || "all";
    
    let baseData = [
      { x: "Jan", y: 12000 },
      { x: "Feb", y: 15000 },
      { x: "Mar", y: 18000 },
      { x: "Apr", y: 22000 },
      { x: "May", y: 25000 },
      { x: "Jun", y: 28000 },
      { x: "Jul", y: 32000 },
      { x: "Aug", y: 35000 },
      { x: "Sep", y: 38000 },
      { x: "Oct", y: 42000 },
      { x: "Nov", y: 45000 },
      { x: "Dec", y: 48000 }
    ];
    
    let yearMultiplier = 1;
    if (year === "2023") yearMultiplier = 0.85;
    else if (year === "2022") yearMultiplier = 0.7;
    
    let countryMultiplier = 1;
    if (country === "US") countryMultiplier = 1.2;
    else if (country === "CA") countryMultiplier = 0.4;
    else if (country === "UK") countryMultiplier = 0.3;
    else if (country === "DE") countryMultiplier = 0.25;
    else if (country === "IN") countryMultiplier = 0.15;
    
    return baseData.map(item => ({
      x: item.x,
      y: Math.round(item.y * yearMultiplier * countryMultiplier)
    }));
  },
  
  getDeviceData: () => {
    const country = CountryDropdown.selectedOptionValue || "all";
    const days = parseInt(DateRangeDropdown.selectedOptionValue || "30");
    
    let baseData = [
      { x: "Desktop", y: 11500 },
      { x: "Mobile", y: 10200 },
      { x: "Tablet", y: 3147 }
    ];
    
    if (country === "IN") {
      baseData = [
        { x: "Mobile", y: 18000 },
        { x: "Desktop", y: 5500 },
        { x: "Tablet", y: 1347 }
      ];
    } else if (country === "US") {
      baseData = [
        { x: "Desktop", y: 13500 },
        { x: "Mobile", y: 12200 },
        { x: "Tablet", y: 4147 }
      ];
    }
    
    const multiplier = days / 30;
    return baseData.map(item => ({
      x: item.x,
      y: Math.round(item.y * multiplier)
    }));
  },
  
  getCountryData: () => {
    const selectedCountry = CountryDropdown.selectedOptionValue || "all";
    const days = parseInt(DateRangeDropdown.selectedOptionValue || "30");
    
    let baseData = [
      { x: "United States", y: 35000 },
      { x: "Canada", y: 18000 },
      { x: "United Kingdom", y: 12000 },
      { x: "Germany", y: 8000 },
      { x: "India", y: 6000 }
    ];
    
    if (selectedCountry !== "all") {
      const countryNames = {
        "US": "United States",
        "CA": "Canada", 
        "UK": "United Kingdom",
        "DE": "Germany",
        "IN": "India"
      };
      
      if (countryNames[selectedCountry]) {
        const selectedData = baseData.find(item => item.x === countryNames[selectedCountry]);
        if (selectedData) {
          return [
            { x: "Region 1", y: Math.round(selectedData.y * 0.4) },
            { x: "Region 2", y: Math.round(selectedData.y * 0.3) },
            { x: "Region 3", y: Math.round(selectedData.y * 0.2) },
            { x: "Region 4", y: Math.round(selectedData.y * 0.1) }
          ];
        }
      }
    }
    
    const multiplier = days / 30;
    return baseData.map(item => ({
      x: item.x,
      y: Math.round(item.y * multiplier)
    }));
  }
}