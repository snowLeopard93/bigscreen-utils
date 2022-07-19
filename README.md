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

| **功能**          | **方法名** |  **参数**         |
| ------------- |-------------|------------- |
| **数组等分** | equallyDivide(array, subGroupLength) |  |

### 2、数值相关 `numberUtil.js`

| **功能**          | **方法名** |  **参数**         |
| ------------- |-------------|------------- |
| **将字符串转换成整型** | parseInt(str) |  |
| **将字符串转换成浮点数** | parseFloat(str) |  |
| **返回保留小数点后指定位数的字符串** | parseFloatByFixed(str, fixed) |  |
| **加千分位分隔符** | toLocaleString(str) |  |
| **返回保留小数点后一位的字符串** | parseFloatByFixedOneDecimalPlace(str) |  |
| **返回保留小数点后两位的字符串** | parseFloatByFixedTwoDecimalPlace(str) |  |
| **返回百分比数值字符串** | getPercentNumber(str, fixed) |  |
| **返回百分比数值字符串（默认值）** | getPercentNumberByDefaultValue(str, fixed, defaultValue) |  |
| **返回百分比数值字符串（默认字符串）** | getPercentNumberByDefaultStr(str, fixed, defaultStr) |  |

### 3、对象相关 `objectUtil.js`

| **功能**          | **方法名** |  **参数**         |
| ------------- |-------------|------------- |
| **判断值是否是null或undefined** | isNullOrUndefined(value) |  |
| **判断值是否是null或undefined或空字符串** | isNullOrUndefinedOrEmptyString(value) |  |

### 4、字符串相关 `stringUtil.js`

| **功能**          | **方法名** |  **参数**         |
| ------------- |-------------|------------- |
| **字符串前面补0** | addLeftZero(num, length) |  |
| **判断是否是JSON字符串** | isJSONStr(str) |  |

### 5、日期相关 `timeUtil.js`

| **功能**          | **方法名** |  **参数**         |
| ------------- |-------------|------------- |
| **传入开始时间、结束时间，返回一个时间数组** | getTimeArray(startTimeStr, endTimeStr, type, interval, formatStr) |  |
| **传入开始时间、结束时间返回一个时间数组，时间间隔为1小时** | getTimeArrayByHours(startTimeStr, endTimeStr) |  |

### 6、金融相关 `financeUtil.js`

| **功能**          | **方法名** |  **参数**         |
| ------------- |-------------|------------- |
| **将传入的值除以10000之后返回** | getValueByTenThousand(oldValue)|  |
| **将传入的值除以10000之后返回保留一位小数的字符串** | getStrByTenThousandFixedOneDecimalPlace(oldValue)|  |
| **将传入的值除以10000之后返回保留两位小数的字符串** | getStrByTenThousandFixedTwoDecimalPlace(oldValue)|  |
| **将传入的值除以10000之后返回保留一位小数的值** | getValueByTenThousandFixedOneDecimalPlace(oldValue, ignoreZero)|  |
| **将传入的值除以10000之后返回保留两位小数的值** | getValueByTenThousandFixedTwoDecimalPlace(oldValue, ignoreZero)|  |
| **将传入的值除以10000之后返回保留一位小数的值，0不做处理** | getValueByTenThousandFixedOneIgnoreZero(oldValue)|  |
| **将传入的值除以10000之后返回保留两位小数的值，0不做处理** | getValueByTenThousandFixedTwoIgnoreZero(oldValue)|  |
| **将传入的值除以1亿之后返回** | getValueByHundredMillion(oldValue)|  |
| **将传入的值除以1亿之后返回保留一位小数的字符串** | getStrByHundredMillionFixedOneDecimalPlace(oldValue)|  |
| **将传入的值除以1亿之后返回保留两位小数的字符串** | getStrByHundredMillionFixedTwoDecimalPlace(oldValue)|  |
| **将传入的值除以1亿之后返回保留一位小数的值** | getValueByHundredMillionFixedOneDecimalPlace(oldValue, ignoreZero)|  |
| **将传入的值除以1亿之后返回保留两位小数的值** | getValueByHundredMillionFixedTwoDecimalPlace(oldValue, ignoreZero)|  |
| **将传入的值除以1亿之后返回保留一位小数的值，0不做处理** | getValueByHundredMillionFixedOneIgnoreZero(oldValue)|  |
| **将传入的值除以1亿之后返回保留两位小数的值，0不做处理** | getValueByHundredMillionFixedTwoIgnoreZero(oldValue)|  |