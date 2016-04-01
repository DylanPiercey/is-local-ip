'use strict'

var test = require('tape')
var isLocalIp = require('../')

test(':: or ::1 or fe80::1', function (t) {
  t.plan(3)
  t.ok('::', 'yes ::')
  t.ok('::1', 'yes ::1')
  t.ok('fe80::1', 'yes fe80::1')
})

test('10.x.x.x', function (t) {
  t.plan(5)
  t.notOk(isLocalIp('9.255.255.255'), 'no 9.255.255.255')
  t.ok(isLocalIp('10.0.0.0'), 'yes 10.0.0.0')
  t.ok(isLocalIp('10.255.255.255'), 'yes 10.255.255.255')
  t.ok(isLocalIp('::ffff:10.255.255.255'), 'yes ::ffff:10.255.255.255')
  t.notOk(isLocalIp('11.0.0.0'), 'no 11.0.0.0')
})

test('10.x.x.x', function (t) {
  t.plan(5)
  t.notOk(isLocalIp('9.255.255.255'), 'no 9.255.255.255')
  t.ok(isLocalIp('10.0.0.0'), 'yes 10.0.0.0')
  t.ok(isLocalIp('10.255.255.255'), 'yes 10.255.255.255')
  t.ok(isLocalIp('::ffff:10.255.255.255'), 'yes ::ffff:10.255.255.255')
  t.notOk(isLocalIp('11.0.0.0'), 'no 11.0.0.0')
})

test('127.x.x.x', function (t) {
  t.plan(5)
  t.notOk(isLocalIp('126.255.255.255'), 'no 126.255.255.255')
  t.ok(isLocalIp('127.0.0.0'), 'yes 127.0.0.0')
  t.ok(isLocalIp('127.255.255.255'), 'yes 127.255.255.255')
  t.ok(isLocalIp('::ffff:127.255.255.255'), 'yes ::ffff:127.255.255.255')
  t.notOk(isLocalIp('128.0.0.0'), 'no 128.0.0.0')
})

test('192.168.x.x', function (t) {
  t.plan(5)
  t.notOk(isLocalIp('192.167.255.255'), 'no 192.167.255.255')
  t.ok(isLocalIp('192.168.0.0'), 'yes 192.168.0.0')
  t.ok(isLocalIp('192.168.255.255'), 'yes 192.168.255.255')
  t.ok(isLocalIp('::ffff:192.168.255.255'), 'yes ::ffff:192.168.255.255')
  t.notOk(isLocalIp('192.169.0.0'), 'no 192.169.0.0')
})

test('172.(16-31).x.x', function (t) {
  t.plan(5)
  t.notOk(isLocalIp('172.15.255.255'), 'no 172.15.255.255')
  t.ok(isLocalIp('172.16.0.0'), 'yes 172.16.0.0')
  t.ok(isLocalIp('172.31.255.255'), 'yes 172.31.255.255')
  t.ok(isLocalIp('::ffff:172.31.255.255'), 'yes ::ffff:172.31.255.255')
  t.notOk(isLocalIp('172.32.0.0'), 'no 172.32.0.0')
})
