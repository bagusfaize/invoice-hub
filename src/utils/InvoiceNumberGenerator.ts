export const generateInvoiceNumber = () => {
    const now = new Date();
    const formattedDateTime = now
      .toISOString()
      .replace(/[-T:.Z]/g, "")
      .slice(0, 14);
  
    return `INV${formattedDateTime}`;
  };