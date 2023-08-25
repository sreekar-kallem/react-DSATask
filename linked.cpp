#include <iostream>
using namespace std;

template <typename E>
class SLinkedList;              // forward declaring the class

template <typename E>
class SNode                     // singly linked list node
{ 
private:
    E elem;                      // linked list element value
    SNode<E> *next;              // next item in the list
    friend class SLinkedList<E>; // provide SLinkedList access
};

template <typename E>
class SLinkedList
{ // a singly linked list
public:
    SLinkedList();                     // empty list constructor
    ~SLinkedList();                    // destructor
    bool empty() const;                // checks if list is empty
    const E &front() const;            // return front element
    void addFront(const E &e);         // adds to front of list
    void removeFront();                // remove front item list
    void removeLast();                 // remove last item list
    void traverse();                   // prints the whole list
    int size = 0;

private:
    SNode<E> *head;                     // head of the list
    SNode<E> *tail;                     // tail of the list
};

template <typename E>
SLinkedList<E>::SLinkedList() // constructor
    : head(NULL)
{
}

template <typename E>
bool SLinkedList<E>::empty() const // is list empty?
{
    return head == NULL;
}

template <typename E>
void SLinkedList<E>::addFront(const E &e)
{                               // add to front of list
    SNode<E> *v = new SNode<E>; // create new node
    v->elem = e;                // store data
    v->next = head;             // head now follows v
    head = v;                   // v is now the head
    size++;                     // maintains length of list  
}

template <typename E>
void SLinkedList<E>::traverse()
{
    SNode<E> *temp = head;
    while (temp != NULL)
    {
        cout << temp->elem << " ";
        temp = temp->next;
    }
    cout << endl;
}

template <typename E>
const E &SLinkedList<E>::front() const // return front element
{
    return head->elem;
}

template <typename E>
SLinkedList<E>::~SLinkedList() // destructor
{
    while (!empty())
        removeFront();
}


template <typename E>
void SLinkedList<E>::removeFront()
{                         // remove front item
    SNode<E> *old = head; // save current head
    head = old->next;     // skip over old head
    delete old;           // delete the old head
    size--;
}

template <typename E>
void SLinkedList<E>::removeLast()
{           
    SNode<E> *temp = head;
    for (int i = 0; i < size - 2;i++)       //traversing till the penultimate element
    {
        temp = temp->next;
    }
    tail = temp;
    tail->next = NULL;                      //declaring the last element null
    size--;

}


void printChoices()
{
    cout << "+----------------------------------------+\n";
    cout << "Please enter one of the following choices:\n";
    cout << "1 : Add at the front\n";
    cout << "2 : Get frontmost element\n";
    cout << "3 : Remove last-added element (Stack - LIFO)\n";
    cout << "4 : Remove first-added element (Queue - FIFO)\n";
    cout << "5 : Print the linked list\n";
    cout << "6 : Exit\n";
}

int main()
{
    SLinkedList<string> sl;
    string a, b;
    int choice;
    while (1)
    {
        printChoices();             //deciding action based on user input
        cin >> choice;
        switch (choice)
        {
            case 1:
            cout << "Enter the element: ";
            cin >> a;
            sl.addFront(a);
            cout << "Element added at the beginning\n";
            break;
        case 2:
            cout << "Frontmost element is : " << sl.front() << endl;
            break;
        case 3:
            cout << "Removing from the front\n";
            sl.removeFront();
            break;
        case 4:
            cout << "Removing from the end\n";
            sl.removeLast();
            break;
        case 5:
            cout << "Printing the linked list : ";
            sl.traverse();
            break;
        case 6:
            cout << "Exiting";
            exit(1);
            break;
        default:
            cout << "Not a valid entry!\n";
            break;
        }
    }
    return 0;
}