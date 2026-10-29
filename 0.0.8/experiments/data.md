# Data Requirements

## Output Variables

### High Priority Variables

Variables required for all Tier 1 experiments:

| Variable | Table | Frequency | Description |
|----------|-------|-----------|-------------|
| tas | Amon | monthly | Near-surface air temperature |
| pr | Amon | monthly | Precipitation |
| [var] | [table] | [freq] | [description] |

### Medium Priority Variables

Variables recommended for full analysis:

| Variable | Table | Frequency | Description |
|----------|-------|-----------|-------------|
| [var] | [table] | [freq] | [description] |
| [var] | [table] | [freq] | [description] |

## Data Submission

### ESGF Publication

All data should be published through ESGF following CMIP conventions:

1. Register your model in the CMIP CV system
2. Prepare data using CMOR
3. Run quality control checks
4. Publish to your local ESGF node

### Naming Conventions

Follow CMIP7 file naming: `<variable>_<table>_<model>_<experiment>_<variant>_<grid>_<time>.nc`

Example: `tas_Amon_ModelName_exp-name_r1i1p1f1_gn_185001-201412.nc`

## Data Access

Published data will be available through:

- [ESGF Search](https://esgf-node.llnl.gov/search/cmip6/)
- CMIP Data Request system

## Quality Control

Before submission, verify:

- [ ] File naming follows CMIP conventions
- [ ] Global attributes are correct
- [ ] Variables have correct units
- [ ] Time axis is properly defined

---

For data questions, see the [CMIP Data Access](https://wcrp-cmip.org/cmip-data-access/) page or contact your local ESGF node.
