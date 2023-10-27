---
id: config-files
sidebar_label: Configuration Files
date: 20231027
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <mark>text to mark</Mark?-->
export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

# Configuration Files for TEv2 tools

Every [TEv2 tool](@) can be called using a (YAML) configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the commandline. 

Users may find it helpful to have a single configuration file that can be used for all such tools instead of having to maintain one for each of them. This document specifies how that can be done.

