import { useQuery } from '@tanstack/react-query';
import { getContacts, getContactDetails } from './api';

export function useContacts() {
  return useQuery({ queryKey: ['contacts', 'list'], queryFn: getContacts });
}

export function useContactDetails(id) {
  return useQuery({
    queryKey: ['contacts', 'detail', id],
    queryFn: () => getContactDetails(id),
  });
}
