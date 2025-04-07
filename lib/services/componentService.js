import dynamic from "next/dynamic";

export const components = {
  TestComponent1: 
  (() =>
    import("@/components/blocks/TestComponent1").then(
      (module) => module.default
    )
  ),
  TestComponent2: 
  (() =>
    import("@/components/blocks/TestComponent2").then(
      (module) => module.default
    )
  ),
  Contact: 
  (() =>
    import("@/components/blocks/Contact").then((module) => module.default)
  ),
  TaxonomyCollection: 
  (() =>
    import("@/components/blocks/TaxonomyCollection").then(
      (module) => module.default
    )
  ),
  Slider: 
  (() =>
    import("@/components/blocks/Slider").then((module) => module.default)
  ),
  Gallery: 
  (() =>
    import("@/components/blocks/Gallery").then((module) => module.default)
  ),
  Banner: 
  (() =>
    import("@/components/blocks/Banner").then((module) => module.default)
  ),
};
