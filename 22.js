// https://www.codewars.com/kata/cookie-creator/train/javascript


function setCookie(name, value, domain, path, expires) {
  let cookieStr = 'document.cookie = ';

  if (!name) {
    return 'Must include a cookie name';
  }!value ? cookieStr += `"${name}=${name}` : cookieStr += `"${name}=${value}`;

  if (expires) {
    typeof expires === 'string' ? cookieStr += `; expires=${String(new Date(expires)).slice(0, 16) + '00:00:00'}` : cookieStr += `; expires=${ String(new Date(Date.now() + expires * 86400000)).slice(0, 16) + '00:00:00'}`;
  }

  !path ? cookieStr += '; path=/' : cookieStr += `; path=${path}`;

  domain ? cookieStr += `; domain=${domain}` : false;

  return cookieStr + '"';
}