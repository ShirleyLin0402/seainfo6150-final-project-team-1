import { useState, useCallback, useMemo } from 'react';

export function useNonEmptyTextinputState(initValue) {
  const [value, setValue] = useState(initValue);
  const onChange = useCallback(e => setValue(e.target.value), [setValue]);
  const hasError = useMemo(() => value === '', [value]);
  return [value, onChange, hasError];
}
