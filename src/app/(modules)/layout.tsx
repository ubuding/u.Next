import ModulesLayoutIndex from "#/Layout/ModulesLayout";
export default function ModulesLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return <ModulesLayoutIndex {...props} />;
}
