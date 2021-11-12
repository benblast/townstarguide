const base_earnings = {
    '0x0800000000000000000000000000000000': 15,
    '0x0400000000000000000000000000000000': 15,
    '0x0b00000000000000000000000000000000': 14,
    '0x1b00000000000000000000000000000000': 1,
    '0x2800000000000000000000000000000000': 11,
    '0x3400000000000000000000000000000000': 2,
    '0x6100000000000000000000000000000000': 70,
    '0x8500000000000000000000000000000000': 3027,
    '0xac00000000000000000000000000000000': 14,
    '0xb700000000000000000000000000000000': 3018,
    '0x012800000000000000000000000000000000': 14,
    '0x017000000000000000000000000000000000': 11,
    '0x0a00000000000000000000000000000000': 14,
    '0x0e00000000000000000000000000000000': 14,
    '0x1800000000000000000000000000000000': 1,
    '0x2900000000000000000000000000000000': 11,
    '0x2e00000000000000000000000000000000': 11,
    '0x3c00000000000000000000000000000000': 1,
    '0x5d00000000000000000000000000000000': 15,
    '0xa300000000000000000000000000000000': 15,
    '0xfd00000000000000000000000000000000': 75,
    '0x011d00000000000000000000000000000000': 11,
    '0x012c00000000000000000000000000000000': 14,
    '0x017500000000000000000000000000000000': 11,
    '0x019600000000000000000000000000000000': 11,
    '0x1c00000000000000000000000000000000': 1,
    '0x1e00000000000000000000000000000000': 1,
    '0xa100000000000000000000000000000000': 15,
    '0x012600000000000000000000000000000000': 45,
    '0x012a00000000000000000000000000000000': 45,
    '0x012e00000000000000000000000000000000': 45,
    '0x013100000000000000000000000000000000': 18,
    '0x013800000000000000000000000000000000': 18,
    '0x013c00000000000000000000000000000000': 11,
    '0x016d00000000000000000000000000000000': 11,
    '0x016f00000000000000000000000000000000': 11,
    '0x1f00000000000000000000000000000000': 8,
    '0x2500000000000000000000000000000000': 11,
    '0x3200000000000000000000000000000000': 4,
    '0x3a00000000000000000000000000000000': 1,
    '0x011e00000000000000000000000000000000': 11,
    '0x012300000000000000000000000000000000': 11,
    '0x012f00000000000000000000000000000000': 11,
    '0x013e00000000000000000000000000000000': 11,
    '0x017100000000000000000000000000000000': 11,
    '0x017e00000000000000000000000000000000': 11,
    '0x018000000000000000000000000000000000': 11,
    '0x019500000000000000000000000000000000': 11,
    '0x019800000000000000000000000000000000': 10,
    '0x0700000000000000000000000000000000': 15,
    '0x0900000000000000000000000000000000': 15,
    '0x1a00000000000000000000000000000000': 1,
    '0x2d00000000000000000000000000000000': 11,
    '0x3000000000000000000000000000000000': 6,
    '0x3800000000000000000000000000000000': 1,
    '0x3b00000000000000000000000000000000': 1,
    '0x4100000000000000000000000000000000': 1,
    '0x6300000000000000000000000000000000': 2577,
    '0x9d00000000000000000000000000000000': 1,
    '0x012000000000000000000000000000000000': 11,
    '0x014700000000000000000000000000000000': 11,
    '0x2100000000000000000000000000000000': 50,
    '0x1100000000000000000000000000000000': 13,
    '0x0600000000000000000000000000000000': 15,
    '0x0500000000000000000000000000000000': 15,
    '0x1400000000000000000000000000000000': 12,
    '0x2000000000000000000000000000000000': 35,
    '0x2300000000000000000000000000000000': 1,
    '0x3900000000000000000000000000000000': 1,
    '0x4400000000000000000000000000000000': 1,
    '0x4800000000000000000000000000000000': 24,
    '0x012100000000000000000000000000000000': 11,
    '0x012900000000000000000000000000000000': 18,
    '0x013200000000000000000000000000000000': 45,
    '0x013600000000000000000000000000000000': 11,
    '0x013b00000000000000000000000000000000': 11,
    '0x015500000000000000000000000000000000': 11,
    '0x018200000000000000000000000000000000': 11,
    '0x019400000000000000000000000000000000': 11,
    '0x0c00000000000000000000000000000000': 14,
    '0x0200000000000000000000000000000000': 15,
    '0x012200000000000000000000000000000000': 14,
    '0x012b00000000000000000000000000000000': 11,
    '0x013400000000000000000000000000000000': 17,
    '0x014d00000000000000000000000000000000': 15,
    '0x016e00000000000000000000000000000000': 11,
    '0x017f00000000000000000000000000000000': 11,
    '0x019200000000000000000000000000000000': 11,
    '0x0300000000000000000000000000000000': 15,
    '0x3100000000000000000000000000000000': 6,
    '0x3300000000000000000000000000000000': 2,
    '0x4200000000000000000000000000000000': 1,
    '0x4900000000000000000000000000000000': 24,
    '0x4b00000000000000000000000000000000': 2832,
    '0x9700000000000000000000000000000000': 1,
    '0x015800000000000000000000000000000000': 11,
    '0x016900000000000000000000000000000000': 11,
    '0x0d00000000000000000000000000000000': 14,
    '0x1200000000000000000000000000000000': 13,
    '0x1700000000000000000000000000000000': 8,
    '0x2400000000000000000000000000000000': 11,
    '0x2b00000000000000000000000000000000': 11,
    '0xa500000000000000000000000000000000': 15,
    '0x014800000000000000000000000000000000': 11,
    '0x015600000000000000000000000000000000': 11,
    '0x018100000000000000000000000000000000': 11,
    '0x2200000000000000000000000000000000': 75,
    '0x2a00000000000000000000000000000000': 11,
    '0x5f00000000000000000000000000000000': 14,
    '0x5e00000000000000000000000000000000': 15,
    '0x6200000000000000000000000000000000': 120,
    '0xa000000000000000000000000000000000': 15,
    '0x012500000000000000000000000000000000': 18,
    '0x014b00000000000000000000000000000000': 11,
    '0x016800000000000000000000000000000000': 11,
    '0x017300000000000000000000000000000000': 11,
    '0x017400000000000000000000000000000000': 11,
    '0xae00000000000000000000000000000000': 0,
    '0x011f00000000000000000000000000000000': 11,
    '0x012700000000000000000000000000000000': 11,
    '0x016700000000000000000000000000000000': 11,
    '0x017700000000000000000000000000000000': 11,
    '0x019300000000000000000000000000000000': 11,
    '0x1000000000000000000000000000000000': 13,
    '0x0f00000000000000000000000000000000': 14,
    '0x2f00000000000000000000000000000000': 6,
    '0x3500000000000000000000000000000000': 2,
    '0xa400000000000000000000000000000000': 15,
    '0xaa00000000000000000000000000000000': 14,
    '0xa800000000000000000000000000000000': 15,
    '0xe300000000000000000000000000000000': 15,
    '0x012400000000000000000000000000000000': 14,
    '0x013000000000000000000000000000000000': 72,
    '0x013f00000000000000000000000000000000': 11,
    '0x1900000000000000000000000000000000': 1,
    '0x1d00000000000000000000000000000000': 1,
    '0x1600000000000000000000000000000000': 8,
    '0x4700000000000000000000000000000000': 1,
    '0x6400000000000000000000000000000000': 3075,
    '0x8400000000000000000000000000000000': 1629,
    '0x8300000000000000000000000000000000': 100,
    '0x9f00000000000000000000000000000000': 15,
    '0xab00000000000000000000000000000000': 14,
    '0xa600000000000000000000000000000000': 15,
    '0xa200000000000000000000000000000000': 15,
    '0xa700000000000000000000000000000000': 15,
    '0x014900000000000000000000000000000000': 11,
    '0x015700000000000000000000000000000000': 11,
    '0x015900000000000000000000000000000000': 11,
    '0x1500000000000000000000000000000000': 11,
    '0x3d00000000000000000000000000000000': 1,
    '0x4000000000000000000000000000000000': 1,
    '0x4300000000000000000000000000000000': 1,
    '0x6000000000000000000000000000000000': 1,
    '0x8600000000000000000000000000000000': 3075,
    '0xa900000000000000000000000000000000': 14,
    '0x013300000000000000000000000000000000': 14,
    '0x013900000000000000000000000000000000': 72,
    '0x013d00000000000000000000000000000000': 11,
    '0x2600000000000000000000000000000000': 11,
    '0x2700000000000000000000000000000000': 11,
    '0x3700000000000000000000000000000000': 1,
    '0x3e00000000000000000000000000000000': 1,
    '0x3f00000000000000000000000000000000': 1,
    '0x4500000000000000000000000000000000': 1,
    '0x4600000000000000000000000000000000': 1,
    '0x9600000000000000000000000000000000': 200,
    '0xad00000000000000000000000000000000': 1,
    '0xcf00000000000000000000000000000000': 14,
    '0x014a00000000000000000000000000000000': 11,
    '0x016a00000000000000000000000000000000': 11,
    '0x017600000000000000000000000000000000': 11,
    '0x1300000000000000000000000000000000': 12,
    '0x2c00000000000000000000000000000000': 11,
    '0x3600000000000000000000000000000000': 1,
    '0x012d00000000000000000000000000000000': 18,
    '0x013500000000000000000000000000000000': 20,
    '0x013700000000000000000000000000000000': 14,
    '0x016b00000000000000000000000000000000': 11,
    '0x019a00000000000000000000000000000000': 9,
    '0x01a100000000000000000000000000000000': 11,
    '0x01a200000000000000000000000000000000': 11,
    '0x01a300000000000000000000000000000000': 11,
    '0x01a400000000000000000000000000000000': 11,
    '0x01a500000000000000000000000000000000': 11,
    '0x01d000000000000000000000000000000000': 16,
    '0x01d100000000000000000000000000000000': 100,
    '0x01d200000000000000000000000000000000': 666,
    '0x01df00000000000000000000000000000000': 14,
    '0x01e100000000000000000000000000000000': 15,
    '0x01e000000000000000000000000000000000': 14,
    '0x01e300000000000000000000000000000000': 15,
    '0x01e200000000000000000000000000000000': 15,
    '0x01e500000000000000000000000000000000': 14,
    '0x01e400000000000000000000000000000000': 14,
    '0x01e600000000000000000000000000000000': 15,
    '0x01e700000000000000000000000000000000': 15,
    '0x01e800000000000000000000000000000000': 14,
    '0x01e900000000000000000000000000000000': 15,
    '0x01ea00000000000000000000000000000000': 14,
    '0x01ec00000000000000000000000000000000': 15,
    '0x01eb00000000000000000000000000000000': 15,
    '0x01ed00000000000000000000000000000000': 15,
    '0x01ef00000000000000000000000000000000': 14,
    '0x01ee00000000000000000000000000000000': 15,
    '0x01f000000000000000000000000000000000': 14,
    '0x01f100000000000000000000000000000000': 14,
    '0x01f200000000000000000000000000000000': 15,
    '0x01f300000000000000000000000000000000': 15,
    '0x01f400000000000000000000000000000000': 14,
    '0x01f500000000000000000000000000000000': 15,
    '0x01f600000000000000000000000000000000': 14,
    '0x01f700000000000000000000000000000000': 15,
    '0x01f800000000000000000000000000000000': 15,
    '0x01ff00000000000000000000000000000000': 14,
    '0x020100000000000000000000000000000000': 60,
    '0x020000000000000000000000000000000000': 14,
    '0x020200000000000000000000000000000000': 60,
    '0x020300000000000000000000000000000000': 79,
    '0x020400000000000000000000000000000000': 140,
    '0x020600000000000000000000000000000000': 60,
    '0x020700000000000000000000000000000000': 140,
    '0x020800000000000000000000000000000000': 1155,
}

module.exports = { base_earnings }
