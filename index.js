'use strict'

module.exports = isLocalIp

// Matches all local ip ranges.
// 10.0.0.0 - 10.255.255.255
// 127.0.0.0 - 127.255.255.255
// 172.16.0.0 - 172.31.255.255
// 192.168.0.0 - 192.168.255.255
var local = /^(::f{4}:)?(10\.\d{1,3}|127\.\d{1,3}|172\.1[6-9]|172\.2\d|172\.3[0-1]|192\.168)\.\d{1,3}\.\d{1,3}/
/**
 * Tests that an ip address is one that is reserved for local area, or internal networks.
 */
function isLocalIp (address) {
  return (
    address === '::' ||
    address === '::1' ||
    address === 'fe80::1' ||
    local.test(address)
  )
}
