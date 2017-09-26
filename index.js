'use strict'

module.exports = isLocalIp

// Matches all local ip ranges.
// 10.0.0.0 - 10.255.255.255
// 127.0.0.0 - 127.255.255.255
// 172.16.0.0 - 172.31.255.255
// 192.168.0.0 - 192.168.255.255
var local = /^(::f{4}:)?(10\.\d{1,3}|127\.\d{1,3}|172\.1[6-9]|172\.2\d|172\.3[0-1]|192\.168)\.\d{1,3}\.\d{1,3}/
// Matches
// 169.254.1.0 - 169.254.254.255
var dhcpV4 = /^(::f{4}:)?169\.254\.([1-9]|1?\d\d|2[0-4]\d|25[0-4])\.\d{1,3}/
// Matches
// fd00::/8
var ulaV6 = /^fd[0-9a-f]{2}(::1$|:[0-9a-f]{1,4}){1,7}/
// Matches
// fe80::/10
var fe80V6 = /^fe[89ab][0-9a-f](::1$|:[0-9a-f]{1,4}){1,7}/
/**
 * Tests that an ip address is one that is reserved for local area, or internal networks.
 */
function isLocalIp (address) {
  return (
    address === '::' ||
    address === '::1' ||
    local.test(address) ||
    dhcpV4.test(address) ||
    ulaV6.test(address) ||
    fe80V6.test(address)
  )
}
