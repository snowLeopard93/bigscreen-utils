![latest tag](https://badgen.net/github/tag/snowLeopard93/bigscreen-utils)  ![npm version](https://badgen.net/npm/node/next) ![airbnb](https://badgen.net/badge/icon/airbnb?icon=airbnb&label) ![install size](https://badgen.net/packagephobia/install/bigscreen-utils)


# bigscreen-utils

It provides some of the functions used by bigscreens, includes numbers, strings, arrays, and objects.It may allow you to avoid resealing related methods in bigscreen page development.

## Install

```
$ npm install bigscreen-utils
```

## Usage

### 1、import引入

```js
// 1、全部引入
import { parseFloatByFixed } from "bigscreen-utils";

// 2、只引入部分
import { parseFloatByFixed } from "bigscreen-utils/src/util/numberUtil";

const floatValue = parseFloatByFixed(10000.888, 2)
console.log(floatValue); // 10000.89
```

### 2、script标签引入

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script type="text/javascript" src="dist/arrayutil.min.js"></script>
	<script type="text/javascript" src="dist/numberUtil.min.js"></script>
	<script type="text/javascript" src="dist/stringUtil.min.js"></script>
	<script type="text/javascript" src="dist/objectUtil.min.js"></script>
	<script type="text/javascript">
        const floatValue = parseFloatByFixed(10000.888, 2)
		console.log(floatValue); // 10000.89
	</script>
</head>
<body>
    <div>bigscreen utils test</div>
</body>
</html>
```

## API

### 1、数组相关 `arrayUtil.js`

| **功能**          | **方法名** |
| ------------- |-------------|
| **数组等分** | equallyDivide(array, subGroupLength) |

#### 1.1 equallyDivide

| **参数** | **说明** |
| ------------- |-------------|
| array |原数组|
| subGroupLength |数组等分长度|

### 2、数值相关 `numberUtil.js`

| **功能**          | **方法名** | **返回值类型** |
| ------------- |-------------|-------------|
| **将字符串转换成整型** | parseInt(str) | number |
| **将字符串转换成浮点数** | parseFloat(str) | number |
| **返回保留小数点后指定位数的字符串** | parseFloatByFixed(str, fixed) | string |
| **加千分位分隔符** | toLocaleString(str) | string |
| **返回保留小数点后一位的字符串** | parseFloatByFixedOneDecimalPlace(str) | string |
| **返回保留小数点后两位的字符串** | parseFloatByFixedTwoDecimalPlace(str) | string |
| **返回百分比数值字符串** | getPercentNumber(str, fixed) | string |
| **返回百分比数值字符串（默认值）** | getPercentNumberByDefaultValue(str, fixed, defaultValue) | string |
| **返回百分比数值字符串（默认字符串）** | getPercentNumberByDefaultStr(str, fixed, defaultStr) | string |
| **返回百分比数值** | getPercentNumberValue(str, fixed) | number |
| **返回百分比数值（默认值）** | getPercentNumberValueByDefaultValue(str, fixed, defaultValue) | number |
| **返回百分比数值（默认字符串）** | getPercentNumberValueByDefaultStr(str, fixed, defaultStr) | number |

#### 2.1 parseInt

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|

#### 2.2 parseFloat

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|

#### 2.3 parseFloatByFixed

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|
| fixed |小数点后保留位数|

#### 2.4 toLocaleString

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|

#### 2.5 parseFloatByFixedOneDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|

#### 2.6 parseFloatByFixedTwoDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|

#### 2.7 getPercentNumber

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|
| fixed |小数点后保留位数|

#### 2.8 getPercentNumberByDefaultValue

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|
| fixed |小数点后保留位数|
| defaultValue |默认值|

#### 2.9 getPercentNumberByDefaultStr

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|
| fixed |小数点后保留位数|
| defaultStr |默认字符串|

### 3、对象相关 `objectUtil.js`

| **功能**          | **方法名** |
| ------------- |-------------|
| **判断值是否是null或undefined** | isNullOrUndefined(value) |
| **判断值是否是null或undefined或空字符串** | isNullOrUndefinedOrEmptyString(value) |

#### 3.1 isNullOrUndefined

| **参数** | **说明** |
| ------------- |-------------|
| value |值|

#### 3.2 isNullOrUndefinedOrEmptyString

| **参数** | **说明** |
| ------------- |-------------|
| value |值|

### 4、字符串相关 `stringUtil.js`

| **功能**          | **方法名** |
| ------------- |-------------|
| **字符串前面补0** | addLeftZero(num, length) |
| **判断是否是JSON字符串** | isJSONStr(str) |

#### 4.1 addLeftZero

| **参数** | **说明** |
| ------------- |-------------|
| num |数值|
| length |字符串长度|

#### 4.2 isJSONStr

| **参数** | **说明** |
| ------------- |-------------|
| str |字符串|

### 5、日期相关 `timeUtil.js`

| **功能**          | **方法名** |
| ------------- |-------------|
| **传入开始时间、结束时间，返回一个时间数组** | getTimeArray(startTimeStr, endTimeStr, type, interval, formatStr) |
| **传入开始时间、结束时间返回一个时间数组，时间间隔为1小时** | getTimeArrayByHours(startTimeStr, endTimeStr) |

#### 5.1 getTimeArray

| **参数** | **说明** |
| ------------- |-------------|
| startTimeStr |开始时间字符串|
| endTimeStr |结束时间字符串|
| type |类型|
| interval |时间间隔|
| formatStr |时间格式|

#### 5.2 getTimeArrayByHours

| **参数** | **说明** |
| ------------- |-------------|
| startTimeStr |开始时间字符串|
| endTimeStr |结束时间字符串|

### 6、金融相关 `financeUtil.js`

| **功能**          | **方法名** |
| ------------- |-------------|
| **将传入的值除以1万之后返回** | getValueByTenThousand(oldValue)|
| **将传入的值除以1万之后返回保留一位小数的字符串** | getStrByTenThousandFixedOneDecimalPlace(oldValue)|
| **将传入的值除以1万之后返回保留两位小数的字符串** | getStrByTenThousandFixedTwoDecimalPlace(oldValue)|
| **将传入的值除以1万之后返回保留一位小数的值** | getValueByTenThousandFixedOneDecimalPlace(oldValue, ignoreZero)|
| **将传入的值除以1万之后返回保留两位小数的值** | getValueByTenThousandFixedTwoDecimalPlace(oldValue, ignoreZero)|
| **将传入的值除以1万之后返回保留一位小数的值，0不做处理** | getValueByTenThousandFixedOneIgnoreZero(oldValue)|
| **将传入的值除以1万之后返回保留两位小数的值，0不做处理** | getValueByTenThousandFixedTwoIgnoreZero(oldValue)|
| **将传入的值除以1亿之后返回** | getValueByHundredMillion(oldValue)|
| **将传入的值除以1亿之后返回保留一位小数的字符串** | getStrByHundredMillionFixedOneDecimalPlace(oldValue)|
| **将传入的值除以1亿之后返回保留两位小数的字符串** | getStrByHundredMillionFixedTwoDecimalPlace(oldValue)|
| **将传入的值除以1亿之后返回保留一位小数的值** | getValueByHundredMillionFixedOneDecimalPlace(oldValue, ignoreZero)|
| **将传入的值除以1亿之后返回保留两位小数的值** | getValueByHundredMillionFixedTwoDecimalPlace(oldValue, ignoreZero)|
| **将传入的值除以1亿之后返回保留一位小数的值，0不做处理** | getValueByHundredMillionFixedOneIgnoreZero(oldValue)|
| **将传入的值除以1亿之后返回保留两位小数的值，0不做处理** | getValueByHundredMillionFixedTwoIgnoreZero(oldValue)|

#### 6.1 getValueByTenThousand

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.2 getStrByTenThousandFixedOneDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.3 getStrByTenThousandFixedTwoDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.4 getValueByTenThousandFixedOneDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|
| ignoreZero |是否忽略0|

#### 6.5 getValueByTenThousandFixedTwoDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|
| ignoreZero |是否忽略0|

#### 6.6 getValueByTenThousandFixedOneIgnoreZero

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.7 getValueByTenThousandFixedTwoIgnoreZero

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.8 getValueByHundredMillion

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.9 getStrByHundredMillionFixedOneDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.10 getStrByHundredMillionFixedTwoDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.11 getValueByHundredMillionFixedOneDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|
| ignoreZero |是否忽略0|

#### 6.12 getValueByHundredMillionFixedTwoDecimalPlace

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|
| ignoreZero |是否忽略0|

#### 6.13 getValueByHundredMillionFixedOneIgnoreZero

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|

#### 6.14 getValueByHundredMillionFixedTwoIgnoreZero

| **参数** | **说明** |
| ------------- |-------------|
| oldValue |值|