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
      'shopping_list_name': 'Shopping list name',
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
      'add': 'Add',
      'username': 'User name',
      'close': 'Close',
      'save': 'Save',
      'amount': 'Amount',
      'item_name': 'Item name',
      'not_completed': 'Uncompleted',
      'total_items': 'Total items',
      'completed_items': 'Completed items',


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
      'shopping_list_name': 'Jméno nákupní seznam',
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
      'add': 'Přidat',
      'username': 'Jméno uživatele',
      'close': 'Zavřít',
      'save': 'Uložit',
      'amount': 'Množství',
      'item_name': 'Název položky',
      'not_completed': 'Nedokončeno',
      'total_items': 'Celkový počet položek',
      'completed_items': 'Dokončené položky',

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
