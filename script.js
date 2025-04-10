// Detect Device Type
function getDeviceType() {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return "Mobile";
  if (/tablet/i.test(ua)) return "Tablet";
  return "Desktop";
}

// Detect Operating System
function getOS() {
  const platform = navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'Windows';
  if (platform.includes('mac')) return 'MacOS';
  if (platform.includes('linux')) return 'Linux';
  if (/android/i.test(navigator.userAgent)) return 'Android';
  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) return 'iOS';
  return 'Unknown OS';
}

// Detect Browser
function getBrowser() {
  const ua = navigator.userAgent;
  if (/chrome|chromium|crios/i.test(ua)) return 'Chrome';
  if (/firefox|fxios/i.test(ua)) return 'Firefox';
  if (/safari/i.test(ua) && !/chrome|chromium|crios/i.test(ua)) return 'Safari';
  if (/msie|trident/i.test(ua)) return 'Internet Explorer';
  if (/edg/i.test(ua)) return 'Edge';
  return 'Unknown Browser';
}

// Fetch IP Address
async function getIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch {
    return 'Unable to fetch IP';
  }
}

// Display Information
async function displayInfo() {
  document.getElementById('deviceType').innerText = getDeviceType();
  document.getElementById('os').innerText = getOS();
  document.getElementById('browser').innerText = getBrowser();
  document.getElementById('ipAddress').innerText = await getIPAddress();
}

displayInfo();