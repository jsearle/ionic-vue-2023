# sensei

Plugin de demostración para el curso de Imagina Formación

## Install

```bash
npm install sensei
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`initSensors()`](#initsensors)
* [`getPressure()`](#getpressure)
* [`getLight()`](#getlight)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### initSensors()

```typescript
initSensors() => Promise<{ result: string; }>
```

**Returns:** <code>Promise&lt;{ result: string; }&gt;</code>

--------------------


### getPressure()

```typescript
getPressure() => Promise<{ value: number; }>
```

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### getLight()

```typescript
getLight() => Promise<{ value: number; }>
```

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------

</docgen-api>
