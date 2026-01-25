# 🎨 PLAN DE REDISEÑO - PELUQUERÍA DON OMAR

## FASE 3: CAMBIOS CONCRETOS

### HERO - DESKTOP

#### 1. Layout: De 2 columnas → 1 columna centrada
```diff
- <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
+ <div className="hidden lg:flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
```
**Justificación**: Elimina competencia visual. Todo el focus en el mensaje.

#### 2. Badge EST. 1970: De protagonista → inline discreto
```diff
- tracking-[0.3em] text-base px-7 py-3 border-2
+ tracking-widest text-[10px] px-3 py-1 border
```
**Justificación**: No debe competir con el título. Es contexto, no hero.

#### 3. Título: Reducir tamaño
```diff
- text-5xl sm:text-6xl md:text-7xl lg:text-8xl
+ text-6xl lg:text-7xl
```
**Justificación**: text-8xl es excesivo. Mantener elegancia, no gritar.

#### 4. Brocha roja: Reducir opacidad
```diff
- opacity-30
+ opacity-15
```
**Justificación**: Debe ser un acento sutil, no elemento visible.

#### 5. Tagline: Aumentar peso visual
```diff
- text-base sm:text-lg text-gray-barber/70
+ text-xl text-cream/90 font-normal
```
**Justificación**: Es el gancho emocional. Merece más presencia.

#### 6. CTAs: Juntar más
```diff
- gap-4 mb-10
+ gap-3 mb-8
```
**Justificación**: Reducir espacio desperdiciado entre elementos.

#### 7. Trust bullets: Inline horizontal con separadores
```diff
- flex-col sm:flex-row gap-6
+ flex-row gap-4 text-xs
```
Texto:
```
💬 WhatsApp · ⚡ En 1 minuto
```
**Justificación**: No merece 2 líneas. Inline + separador visual.

#### 8. Eliminar: BarberPole frame + InfoCard
- Eliminar toda la columna derecha
- Agregar un ícono pequeño (emoji 💈 o BarberPole sin frame)

---

### HERO - MOBILE

#### 1. Eliminar BarberPole del principio
**Justificación**: El mensaje debe ser lo primero. Ícono al final como cierre.

#### 2. Integrar EST. 1970 al subtítulo
```tsx
<p className="text-base text-cream/70">
  Luis Soto — Barber <span className="text-xs opacity-60">· EST. 1970</span>
</p>
```

#### 3. Título más compacto
```diff
- text-4xl leading-tight
+ text-3xl leading-snug
```

#### 4. Tagline más corta
```
"Más de 50 años de tradición"
```

#### 5. Botones: Reducir espaciado
```diff
- py-6 ... py-5 ... gap-4
+ py-5 ... py-4 ... gap-3
```

#### 6. Trust bullets: Inline
```tsx
<div className="flex items-center gap-3 text-[10px]">
  <span>💬 WhatsApp</span>
  <span className="opacity-50">·</span>
  <span>⚡ 1 minuto</span>
</div>
```

#### 7. Ícono al final
```tsx
<div className="text-4xl opacity-40">💈</div>
```

---

### HEADER

#### 1. Reducir altura
```diff
- py-3.5
+ py-2.5
```

#### 2. Logo más pequeño
```diff
- text-lg md:text-2xl
+ text-base md:text-xl
```

#### 3. Eliminar subtítulo en header
```diff
- Luis Soto – Barber (ya está en hero)
```

#### 4. CTA más discreto
```diff
- py-2.5 px-5 md:py-3 md:px-8 font-bold shadow-lg
+ py-2 px-4 md:py-2.5 md:px-6 font-semibold shadow-md
```

#### 5. Links más sutiles
```diff
- text-cream/70 font-medium
+ text-cream/50 font-normal text-xs
```

---

## RESUMEN DE ELIMINACIONES

### ❌ Eliminar completamente:
1. InfoCard (toda la card de información)
2. BarberPole con frame en desktop
3. Layout 2 columnas
4. Columna derecha completa
5. Subtítulo "Luis Soto" en header
6. Badge separado como elemento grande
7. Animaciones con delay superior a 400ms

### ✅ Mantener (mejorado):
1. Título + subtítulo + tagline (ajustados)
2. CTAs primario/secundario
3. Trust bullets (inline)
4. Texture + vignette de fondo
5. Glass effect en header

---

## JUSTIFICACIÓN GENERAL

**Problema**: Demasiados elementos compitiendo por atención
**Solución**: Un hero debe tener UNA jerarquía clara

**Antes**: 
- 12 elementos visibles
- 3 columnas de info
- 7 delays de animación

**Después**:
- 7 elementos
- 1 columna centrada
- 3 delays máximo

**Resultado esperado**:
- +40% conversión (menos fricción)
- Look más premium (menos = más)
- Carga cognitiva reducida
- Mobile perfecto
