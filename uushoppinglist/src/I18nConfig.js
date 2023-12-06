import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      'loading': 'Loading...',
      'error': 'Error:',
      'dashboard': 'Dashboard',
      'show_archived': 'Show Non-Archived',
      'show_all': 'Show All',
      'create_new_list': 'Create New List',
      'view_shopping_list': 'View Shopping List',
      'delete': 'Delete',
      'saving': 'Saving...',
      'list_not_found': 'List not found',
      'add_item': 'Add Item',
      'add_user': 'Add User',
      'mark_as_done': 'Mark as Done',
      'archive': 'Archive',
      'delete_items': 'Delete Items',
      'completed': 'Completed',
      'remove': 'Remove',
      'pieces': 'pcs',
      'done': 'Done',
    }
  },
  cs: {
    translation: {
      'loading': 'Načítání...',
      'error': 'Chyba:',
      'dashboard': 'Přehled',
      'show_archived': 'Zobrazit ne-archivované',
      'show_all': 'Zobrazit všechny',
      'create_new_list': 'Vytvořit nový seznam',
      'view_shopping_list': 'Zobrazit nákupní seznam',
      'delete': 'Smazat',
      'saving': 'Ukládání...',
      'list_not_found': 'Seznam nenalezen',
      'add_item': 'Přidat položku',
      'add_user': 'Přidat uživatele',
      'mark_as_done': 'Označit jako hotové',
      'archive': 'Archivovat',
      'delete_items': 'Smazat položky',
      'completed': 'Hotovo',
      'remove': 'Odebrat',
      'pieces': 'ks',
      'done': 'Hotovo',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'cs', // defaultní jazyk
    fallbackLng: 'cs', // jazyk pro případ, že překlad chybí
  });

export default i18n;
