window.SIDEBAR_ITEMS = {"enum":[["HierarchyEvent","A `Event` that is fired whenever there is a change in the world’s hierarchy."]],"fn":[["check_hierarchy_component_has_valid_parent","System to print a warning for each `Entity` with a `T` component which parent hasn’t a `T` component."],["despawn_with_children_recursive","Function for despawning an entity and all its children"],["on_hierarchy_reports_enabled","Run criteria that only allows running when [`ReportHierarchyIssue<T>`] is enabled."]],"struct":[["AddChild","Command that adds a child to an entity"],["ChildBuilder","Struct for building children onto an entity"],["Children","Contains references to the child entities of this entity"],["DespawnChildrenRecursive","Despawns the given entity’s children recursively"],["DespawnRecursive","Despawns the given entity and all its children recursively"],["HierarchyPlugin","The base plugin for handling [`Parent`] and [`Children`] components"],["InsertChildren","Command that inserts a child at a given index of a parent’s children, shifting following children back"],["Parent","Holds a reference to the parent entity of this entity. This component should only be present on entities that actually have a parent entity."],["PushChildren","Command that pushes children to the end of the entity’s children"],["RemoveChildren","Command that removes children from an entity, and removes that child’s parent and inserts it into the previous parent component"],["ReportHierarchyIssue","When enabled, runs [`check_hierarchy_component_has_valid_parent<T>`]."],["ValidParentCheckPlugin","Print a warning for each `Entity` with a `T` component whose parent doesn’t have a `T` component."],["WorldChildBuilder","Struct for adding children to an entity directly through the [`World`] for use in exclusive systems"]],"trait":[["BuildChildren","Trait defining how to build children"],["BuildWorldChildren","Trait that defines adding children to an entity directly through the [`World`]"],["DespawnRecursiveExt","Trait that holds functions for despawning recursively down the transform hierarchy"]]};