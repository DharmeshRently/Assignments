#include <iostream>
#include "Node.cpp"
using namespace std;



class LinkedList{
  private:
    Node *head,*tail;
    
  public:
    LinkedList(){
      head=tail=NULL;
    }
    
    void add(int data){
        if(head==NULL){
            head=new Node(data);
            head->next=NULL;
            tail=head;
            return;
        }
        Node* temp=new Node(data);
        tail->next=temp;
        tail=tail->next;
    }
    
    void print(){
        if(head==NULL)  return;
        Node* temp=head;
        while(temp!=NULL){
            printf("%d ",temp->data);
            temp=temp->next;
        }
        cout <<endl;
    }
    
    void deleteEnd(){
        Node* temp=head;
        while(temp->next!=tail){
            temp=temp->next;
        }
        tail=temp;
        tail->next=NULL;
    }
    
    void deleteStart(){
        if(head!=NULL)
            head=head->next;
    }
    
    void deleteIndex(int index){
        if(index ==0){
            deleteStart();
            return;
        }
        Node* temp=head;
        int cout=1;
        while(temp!=NULL){
            if(cout==index){
                temp->next=temp->next->next;
                return;
            }
            temp=temp->next;
            cout++;
        }
    }
    
    bool search(int data){
        Node* temp=head;
        while(temp!=NULL){
            if(temp->data==data)    return true;
            temp=temp->next;
        }
        return false;
    }
};

int main()
{
    LinkedList* ll=new LinkedList();
    int choice=0;
    do{
        cout<<"\n1.Add.\n2.Delete 1st element.\n3.Delete Last Element.\n4.Delete at index.\n5.Display.\n0.Exit\nEnter your Choice: ";
        cin>>choice;
        switch(choice){
            case 1:
                cout<<"Enter number to add: ";
                int num;
                cin>>num;
                ll->add(num);
                break;
            case 2:
                ll->deleteStart();
                break;
            case 3:
                ll->deleteEnd();
                break;
            case 4:
                cout<<"Enter index to delete: ";
                int index;
                cin>>index;
                ll->deleteIndex(index);
                break;
            case 5:
                ll->print();
                break;
            default:
                cout<<"Enter a valid choice..";
        }
    }while(choice!=0);
    return 0;
}

